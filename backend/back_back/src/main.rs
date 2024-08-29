use actix_files::Files;
use actix_web::{web, App, HttpServer, HttpResponse, Responder};
use actix_cors::Cors;
use actix_multipart::Multipart;
use futures_util::stream::StreamExt as _;
use tokio::io::AsyncWriteExt;
use std::fs;
use std::path::Path;

async fn upload_file(mut payload: Multipart) -> impl Responder {
    let upload_dir = Path::new("public/Artist_Artwork");

    if !upload_dir.exists() {
        fs::create_dir_all(upload_dir).expect("Failed to create directory");
    }

    while let Some(item) = payload.next().await {
        let mut field = item.expect("Failed to get field");

        let filename = field
            .content_disposition()
            .get_filename()
            .map(|f| f.to_string())
            .unwrap_or_else(|| "file".to_string());

        let filepath = upload_dir.join(&filename);

        let mut file = tokio::fs::File::create(&filepath)
            .await
            .expect("Failed to create file");

        while let Some(chunk) = field.next().await {
            let data = chunk.expect("Failed to read chunk");
            file.write_all(&data)
                .await
                .expect("Failed to write data");
        }
    }

    HttpResponse::Ok().finish()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive())
            .service(web::resource("/upload").route(web::post().to(upload_file)))
            .service(Files::new("/Artist_Artwork", "public/Artist_Artwork").show_files_listing())
    })
    .bind("127.0.0.1:7070")?
    .run()
    .await
}
