kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

http://ingress-nginx.ingress-nginx-controller.svc.cluster/local