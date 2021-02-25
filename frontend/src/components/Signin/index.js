import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text  } from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">cbdrink</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Connecter vous pour accéder a votre compte</FormH1>
                        <FormLabel htmlFor='for'>Nom</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Connexion</FormButton>
                        <Text>Mot de passe oublié</Text>
                    </Form>
                </FormContent>  
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn
