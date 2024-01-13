openssl req \
	-newkey rsa:4096 \
	-keyout alice_key.pem \
	-out alice_csr.pem \
	-nodes \
	-days 365 \
	-subj "/CN=12246622-VIEJO HUERTA JOSE"

openssl x509 \
	-req \
	-in alice_csr.pem \
	-CA rootCA.crt \
	-CAkey rootCA.key \
	-out alice_cert.pem \
	-set_serial 01 \
	-days 365