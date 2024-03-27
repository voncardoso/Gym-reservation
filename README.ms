# APP
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

    - [] O usuário não deve se cadastrar com e-mail duplicado
    - [] O usuário não pode fazer 2 check-ins no mesmo dia
    - [] O usuário não pode fazer check-in se não estiver perto (100m) de academia
    - [] O check-in só pode ser validade até 20 minutos ap;os ser criardo
    - [] O check-in so pode ser validade por administradores
    - [] A academia so pode ser cadastrada por administradores


# RNFs (Requisitos não funcionais)

    - [] A senha do usuário deve estar criptografada
    - [] Os dados da aplicação deve estar pesistido eem um banco PostgresSQL
    - [] Todas listas de dados devem estar paginadas com 20 items por paginadas
    - [] O usuário deve ser indentificado por um JWT (JSON WEB TOKEN)