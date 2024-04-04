variable "IMAGE_NAME" {
  default = "dialog-ai/rasa-admin"
}
variable "IMAGE_TAG" {
  default = "latest"
}


target "rasa-admin" {
  dockerfile = "Dockerfile.rasa-admin"
  tags       = ["${IMAGE_NAME}:${IMAGE_TAG}"]

  cache-to = ["type=inline"]
}
