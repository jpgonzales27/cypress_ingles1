Feature: Demo de cucumber
    Feature Description

    Scenario: Prueba de cucumber
        Given Abrir el navegador
        When Cargando el nombre jose
        When Cargando el email jp@gmail.com
        And Cargando la direccion crevaux 834
        And Click en el boton
        Then Validar el nombre de la pagina

    Scenario Outline: Scenario Outline name: Prueba de cucumber caso 2
        Given Abrir el navegador
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la direccion <direccion> <numero>
        And Click en el boton
        Then Validar el nombre de la pagina

        Examples:
            | username | email       | direccion  | numero |
            | vanesa   | v@gmail.com | direccion1 | 111    |
            | ana      | a@gmail.com | direccion2 | 222    |
            | maria    | m@gmail.com | direccion3 | 333    |
            | andres   | a@gmail.com | direccion4 | 444    |