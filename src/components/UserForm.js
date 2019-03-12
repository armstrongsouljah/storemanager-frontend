import React from 'react';
import TextInput from './TextInput';

const UserForm = props => (
    
            <div className="">
                <h4 className="center">Add New User</h4>
                {
                    props.onLoading ?
                    <div class="preloader-wrapper active">
                    <div class="spinner-layer spinner-red-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div><div class="gap-patch">
                        <div class="circle"></div>
                      </div><div class="circle-clipper right">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div>
                    :
                    ''
                }
                <form className="form section" onSubmit={props.onSignup}>
                    <TextInput id="username" type="text" labelText="Username" onChange={props.onChange} />
                    <TextInput id="password" type="password" labelText="Password" onChange={props.onChange} />
                    <div className="input-field">
                    <label>User role</label>
                    <br/><br/>
                        <select className="browser-default" id="role" onChange={props.onSelectChange}>
                            <option value="" defaultValue>=========</option>
                            <option value="admin" defaultValue>Admin</option>
                            <option value="attendant">Attendant</option>
                        </select>
                </div>
                    <button className="btn cyan darken-4" type="submit" name="action">
Save
                        <i className="material-icons right">send</i>
                    </button>
                    <br/> <br/>
                    <span className="red-text">{props.errors? props.errors: ''} </span>
                    <span className="teal-text">{props.successMessage ? props.successMessage: ''} </span>
                </form>
            </div>
);

export default UserForm;
