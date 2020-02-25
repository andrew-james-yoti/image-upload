```shell
docker run \
--publish 9999:3000 \
--name image-upload \
-e SECURE=true \
--mount type=bind,src="$(pwd)/test/",target=/src/server/public/images/uploads \
image-upload:1.0
```

```shell
docker run \
--publish 3000:3000 \
--name image-upload \
--volume $(pwd)/test:/src/server/public/images/uploads \
image-upload:1.0
```