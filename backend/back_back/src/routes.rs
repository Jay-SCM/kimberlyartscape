use actix_web::{get, HttpResponse, Responder};
use serde::Serialize;
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
                        let filename = path.file_name().unwrap().to_str().unwrap().to_string();
                        let url = format!("/Artist_Artwork/{}", filename);
                        artworks.push(Artwork {
                            id: 0, // Replace with actual ID if needed
                            title: filename.clone(),
                            url,
                            artist: "Unknown".to_string(),
                            price: 0.0, // Replace with actual price if available
                        });
                    }
                }
            }
        }
    }

    HttpResponse::Ok().json(artworks)
}

#[derive(Serialize)]
struct Artwork {
    id: usize,
    title: String,
    url: String,
    artist: String,
    price: f64,
}




// use actix_files::Files;
// use actix_web::{web, App, HttpServer, HttpResponse, Responder};
// use actix_cors::Cors;
// use actix_multipart::Multipart;
// use futures_util::stream::StreamExt as _;
// use tokio::io::AsyncWriteExt;
// use std::fs;
// use std::path::Path;

// async fn get_artworks() -> impl Responder {
//     let artworks: Vec<String> = vec![]; // Replace with actual logic to retrieve artworks
//     HttpResponse::Ok().json(artworks)
// }

// async fn upload_file(mut payload: Multipart) -> impl Responder {
//     let upload_dir = Path::new("public/Artist_Artwork");
    
//     if !upload_dir.exists() {
//         fs::create_dir_all(upload_dir).expect("Failed to create directory");
//     }
    
//     while let Some(item) = payload.next().await {
//         let mut field = item.expect("Failed to get field");
//         let filename = field.name().to_string();
//         let filepath = upload_dir.join(filename);
//         let mut file = tokio::fs::File::create(&filepath)
//             .await
//             .expect("Failed to create file");
        
//         while let Some(chunk) = field.next().await {
//             let data = chunk.expect("Failed to read chunk");
//             file.write_all(&data)
//                 .await
//                 .expect("Failed to write data");
//         }
//     }
    
//     HttpResponse::Ok().finish()
// }

// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     HttpServer::new(|| {
//         App::new()
//             .wrap(Cors::permissive())
//             .service(web::resource("/upload").route(web::post().to(upload_file)))
//             .service(web::resource("/api/artworks").route(web::get().to(get_artworks)))
//             .service(Files::new("/Artist_Artwork", "public/Artist_Artwork").show_files_listing())
//     })
//     .bind("127.0.0.1:7070")?
//     .run()
//     .await
// }
