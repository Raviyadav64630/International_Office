**Use cases have defined form:**

_Process:_ Name of process to be carried out

_Objective:_ Objective of the process

_Pre-condition:_ Pre conditions that must be set before case can start

_Post-condition (Success):_ Post condition if process is successful

_Post-condition (Failure):_ Post condition if process is not successful

_Actor:_ Person who carries out the process

_Triggering Event:_ Event that triggers the process

_Description:_
Description of the process in ordered steps that are carried out during
execution

_Extensions:_
Description of action in the case of failures
Alternative: alternative process with same objective

**Use Case Example:**

<!--
https://softwareengineering.stackexchange.com/questions/359486/how-to-model-two-step-login-in-uml-via-use-cases-and-sequence-diagrams-properly
-->

_Process:_ user login

_Objective:_ the user is logged in

_Pre-condition:_ the user is registered 

_Post-condition (Success):_ user is logged in and may continue working with the system

_Post-condition (Failure):_ a message saying login failure

_Actor: user_

_Triggering Event:_ Program started

_Description:_

1.Display form for user name, password and link to registration

2.Enter user name

3.Validate user name

4.Enter password

5.Validate password

_User story:_

A user opens the App and finds two buttons: Login and Register. When he/she clicks on Login, she is forwarded to a page with 2 input fields, user name and password.
