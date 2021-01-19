import { Formik } from 'formik'
import React, { Component } from 'react'
import * as Yup from 'yup';
import { Text, StyleSheet, View, TextInput, Button, Keyboard, Alert } from 'react-native'
import { connect } from 'react-redux'

import { registrationUser } from './redux/actions'
import GetNewUserAction from './redux/actions/NewUserRedux'


class Content extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            phone: '',
            adress: '',
        }
    }
    createAlert = (msg = '') =>
    Alert.alert(
      "Alert Title",
      msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    
    render() {
       const { name, email, phone, adress } = this.state
       //console.log('State',this.state)
       console.log('User in Store', this.props.users.user || {})
       console.log('!! newUser in Store', this.props.newUser )

        return (
            <Formik
                
                initialValues={{name: '', email: '', phone: '', adress: ''}}
                validationSchema={Yup.object({
                    name: Yup.string()
                      .max(10, 'Must be 15 characters or less')
                      .required('Required'),
                    adress: Yup.string()
                      .max(20, 'Must be 20 characters or less')
                      .required('Required'),
                   // email: Yup.string().email('Invalid email address').required('Required'),
                  })}
                onSubmit={(values , { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                      //alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                      resetForm(); 
                    }, 400);
                  
                    // this.setState({
                    //     name: values.name,
                    //     email: values.email,
                    //     phone: values.phone,
                    //     adress: values.adress
                    // }) 
                    this.props.newUserData({
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        adress: values.adress
                    }) 
                    
                
                    /*
                    this.props.registrationUser({
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        adress: values.adress}) 
                    */
                        //this.props.registrationUser(JSON.stringify(values, null, 2))            
                   //console.log(values)
                }}
            >
                {(props) => (
                    <View style={styles.formbox}>
                    <Text style={styles.text}> Форма ввода </Text>
                    <TextInput
                        style = {styles.input}
                        placeholder = 'Имя'
                        onBlur={props.handleBlur('name')}
                        onChangeText = { props.handleChange('name') }
                        value = {props.values.name} 
                    />
                    {props.touched.name && props.errors.name ? this.createAlert() : null}
                    <TextInput
                        style = {styles.input}
                        editable = {props.values.name === '' ? false : true}
                        keyboardType='email-address'
                        placeholder = 'email'
                        onChangeText = { props.handleChange('email') }
                        value = {props.values.email} 
                    />
                     {props.touched.email && props.errors.email ? this.createAlert(props.errors.email) : null}
                    <TextInput
                        style = {styles.input}
                        editable = {props.values.email === '' ? false : true}
                        keyboardType = 'phone-pad'
                        placeholder = 'Телефон'
                        onChangeText = { props.handleChange('phone') }
                        value = {props.values.phone} 
                    />
                    <TextInput
                        style = {styles.input}
                        editable = {props.values.phone === '' ? false : true}
                        placeholder = 'Адрес'
                        onChangeText = { props.handleChange('adress') }
                        value = {props.values.adress} 
                    />
                    <Button 
                        title = {'Отправить'} 
                        onPress={()=>{
                            props.handleSubmit()
                            Keyboard.dismiss()
                        }}
                    />
                </View>
                )}
            </Formik>    
        )
    }
}

// const mapStateToProps = (state) => {
//     //console.log(state.users)
//     return {
//         users: state.users
//     }
// }

// const mapDispatchToProps = {
//     registrationUser
// }


export default connect(state => ({
    newUser: state.newUsers,
    users: state.users 
}),{
    registrationUser,
    newUserData: GetNewUserAction.newUserRegistrationData,
})(Content)

const styles = StyleSheet.create({
    
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    formbox: {
        width: '90%',
        alignItems: 'center'
    },
    input: {
        width: '50%',
        //backgroundColor: '#DCDCDC',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        padding: 5,
        marginVertical: 5,
    },
})
