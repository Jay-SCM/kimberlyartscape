use actix_web::{get, HttpResponse, Responder};
use serde::Serialize;
use std::fs;
use std::path::PathBuf;

#[derive(Serialize)]
struct Artwork {
    id: usize,
    title: String,
    url: String,
    artist: String,
    price: f64,
}

#[get("/api/artworks")]
async fn get_artworks() -> impl Responder {
    let dir = PathBuf::from("public/Artist_Artwork");
    let mut artworks = Vec::new();

    if dir.exists() {
        if let Ok(entries) = fs::read_dir(dir) {
            for (index, entry) in entries.enumerate() {
                if let Ok(entry) = entry {
                    let path = entry.path();
                    if path.is_file() {
                        let filename = path.file_name().unwrap().to_str().unwrap().to_string();
                        let url = format!("/Artist_Artwork/{}", filename);
                        artworks.push(Artwork {
                            id: index + 1,
                            title: filename.clone(),
                            url,
                            artist: "Unknown".to_string(),
                            price: 0.0,
                        });
                    }
                }
            }
        }
    }

    HttpResponse::Ok().json(artworks)
}
