Traefik is able to route  the request comming from letsencrypt and sends it to a middleware, in our case authelia, these middlewares can be used as authentication.

Is really easily deployable.
- loadbalancing algorithms and a lot of logs
- security gain through the request proxy.
- no request goes directly to the service. 

Can be used with letsEncrypt. 

Security plugins.

- entrypoint: :80, and 44 for ssl.
	
- router: authentication definition
- middleware
- service: answering to the request
