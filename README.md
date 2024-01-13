openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 \
  -nodes -keyout key.pem -out cert.pem -subj "/CN=cert.com" \
  -addext "subjectAltName=DNS:cert.com,DNS:*.example.com,IP:10.0.0.1"

curl -k --cacert cert.pem --cert alice_cert.pem --key alice_key.pem https://localhost:3333
