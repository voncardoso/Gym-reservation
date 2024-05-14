 stop# APP
    -Name: Gym reservation app

# RFs (Requisitos Funcionais)

   1 - [] Deve ser possível se cadastrar
   2 - [] Deve ser possível se autenticar
   3 - [] Deve ser possível obter o perfil de um usuário logado
   4 - [] Deve ser possível obter o número de chek-ins realizados pelo usuário logado
   5 - [] Deve ser possível o usuário obter o seu histórico de chek-ins
   6 - [] Deve ser possível o usuário buscar academias próximas
   7 - [] Deve ser possível o usuário buscar academias pelo nome
   8 - [] Deve ser possível o usuário realizar check-in em uma academia
   9 - [] Deve ser possível validar check-in de um usuário
  10 - [] Deve ser possivel cadastrar uma academia

# RNs (Regras de negócios)

    - [X] O usuário não deve se cadastrar com e-mail duplicado
    - [] O usuário não pode fazer 2 check-ins no mesmo dia
    - [] O usuário não pode fazer check-in se não estiver perto (100m) de academia
    - [] O check-in só pode ser validade até 20 minutos ap;os ser criardo
    - [] O check-in so pode ser validade por administradores
    - [] A academia so pode ser cadastrada por administradores


# RNFs (Requisitos não funcionais)

    - [X] A senha do usuário deve estar criptografada
    - [X] Os dados da aplicação deve estar pesistido eem um banco PostgresSQL
    - [] Todas listas de dados devem estar paginadas com 20 items por paginadas
    - [] O usuário deve ser indentificado por um JWT (JSON WEB TOKEN)



# Prisma
    - instalar o prisma
        `pnpm i prisma -D `
        `pnpm i  @prisma/clint `
        
    - iniciar o prisma
        `npx prisma init`
    
    -  Criar migrate
        `npx prisma migrate dev`

    - Criar tipagem do prisma
        npx prisma generate 

# Docker 
    - Criar containerr
        `docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest`
    - listar container 
        `docker ps`
    - listar todos os container criardo ate o momento
        `docker ps -a`
    - Rodar o docker 
        `docker start numero-do-container` ou `docker-start nome-do-container`
    -Deletar a imagem 
        `docker rm e o nome-do-container`
    - Mostrar os logs
        `docker logs nome-do-container`

    - Subir o docker quando estiver o docker compose
        ` docker compose up -d`

    # Pattern
        - Repository Pattern    
            
    # SOLID 
        D - Dependency Inversion Principle (Principio da inversão de dependencia)
            Ex: Em vez do caso de uso instanciar a dependencia ele vai receber como parametro