```shell
docker run \
--publish 9999:3000 \
--name image-upload \
-e SECURE=true \
--mount type=bind,src="$(pwd)/test/",target=/src/server/public/images/uploads \
image-upload:1.0
```