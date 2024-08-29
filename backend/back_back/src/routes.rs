use actix_web::{get, web, HttpResponse, Responder};
use std::fs;
use std::path::PathBuf;

#[get("/api/artworks")]
async fn get_artworks() -> impl Responder {
    let dir = PathBuf::from("public/Artist_Artwork");
    let mut artworks = Vec::new();

    if dir.exists() {
        if let Ok(entries) = fs::read_dir(dir) {
            for entry in entries {
                if let Ok(entry) = entry {
                    let path = entry.path();
                    if path.is_file() {
                        let filename = path.file_name().unwrap().to_str().unwrap();
                        artworks.push({
                            let title = filename.to_string();
                            let url = format!("/Artist_Artwork/{}", filename);
                            Artwork {
                                id: 0, // Replace with actual ID or omit if not needed
                                title,
                                url,
                                artist: "Unknown".to_string(), // Replace with actual artist if available
                                price: 0.0, // Replace with actual price if available
                            }
                        });
                    }
                }
            }
        }
    }

    HttpResponse::Ok().json(artworks)
}

#[derive(serde::Serialize)]
struct Artwork {
    id: usize,
    title: String,
    url: String,
    artist: String,
    price: f64,
}

// Add this function to your Actix app configuration
pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(get_artworks);
}
