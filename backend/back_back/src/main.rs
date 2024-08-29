use actix_cors::Cors;
use actix_web::{web, App, HttpServer, HttpResponse};
use tempfile::NamedTempFile;
use std::io::Write; 

async fn upload_file(
    mut payload: web::Payload,
) -> Result<HttpResponse, actix_web::Error> {
    use futures_util::stream::StreamExt;

    let mut tempfile = NamedTempFile::new()?;
    while let Some(chunk) = payload.next().await {
        let data = chunk?;
        tempfile.write_all(&data)?; // Use write_all here
    }
    Ok(HttpResponse::Ok().finish())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive()) // Add this line for CORS
            .route("/upload", web::post().to(upload_file))
    })
    .bind("127.0.0.1:7070")?
    .run()
    .await
}
