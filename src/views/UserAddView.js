import React,  {Component, } from 'react';
import Modal from 'react-responsive-modal';
import {connect} from 'react-redux';
import UserForm from '../components/UserForm';
import registerUser from '../actions/signupAction';

export class UserAddView extends Component {
    state = {
        username: "",
        password: "",
        role: ""
    }

   

   onChange = event => {
    this.setState({
        [event.target.id]: event.target.value, 
    })
   }

    onSelectChange =  event => {
       event.preventDefault();
       this.setState({role: event.target.value})
    }

    onSignup = event => {
        event.preventDefault();
        const { registerUser} = this.props;
        registerUser(this.state)
    }
   
   render() {
       const {open, onClose, signupState,} = this.props;
       return(
        <div className="row">
               <Modal open={open} onClose={onClose} classNames={{modal : "signup-container"}}>
                  <UserForm 
                    onSignup={this.onSignup}
                    onChange={ this.onChange} 
                    onSelectChange={this.onSelectChange} 
                    successMessage={signupState.success_message} 
                    errors={signupState.errors}
                  />
               </Modal>
               
           </div>
       )
   }
}

const mapStateToProps = state => ({
    signupState: state.signupReducer,
})

export default connect(mapStateToProps, {registerUser}) (UserAddView);

