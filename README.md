[Biblioteca Aberta](http://biblioteca-aberta.herokuapp.com/)
=================

Open source site to public domain books. 

![logo](livros/frontend/static/logo.png)

## Where do I find the books?

- [Project Guttenberg](https://www.gutenberg.org/wiki/Main_Page)
- [Domínio Público](http://www.dominiopublico.gov.br/)
- [UNESCO](http://unesdoc.unesco.org)

## Usage

```
$ git clone https://github.com/GuidoBR/livros-livres ; cd livros-livres
$ virtualenv venv
$ source /venv/bin/activate
$ pip install -r requirements.txt
$ gunicorn livros.wsgi --log-file -
```

## Deploy to Heroku

After creating and configuring your Heroku and your project:

### Local server
```
$ heroku local web
```

### Deploy (integrated with Github)

```
$ git push
```

## Technologies

- Python / Django / Django Rest Framework (for the backend API)
- ReactJS (for the frontend)
