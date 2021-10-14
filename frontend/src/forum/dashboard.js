import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import {MyContext} from '../context';

export default class Dashboard extends Component{
    static contextType = MyContext;

    state = {
        user_name : "",
        email_id: "",
        country: "",
        v_error: "",
        threads_arr: [],
        add_thread: "",
        posts_fecth_error: "",
        posts_arr: [],
        add_post: "",
        curr_thread_name: "",
        p_error: "",
        handler_vale: "",
        clickedonThread: false
    }


    componentDidMount(){
        axios.post('http://localhost:4000/project/Newuser/getuserdata',
        {
            username: this.context.r_username,
        })
        .then(response=>{
            console.log(response.data.result.length);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({v_error: local},() => {});
            }
            else
            {
                this.setState({user_name: response.data.result[0].username, email_id: response.data.result[0].email, country: response.data.result[0].country});

            }
        })
        .catch(error=>{
            console.log(error);
        });

        axios.post('http://localhost:4000/project/threads/getdata')
        .then(response=>{
            console.log(response.data.result.length);
            console.log(response.data.result[0].thread_name);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({v_error: local},() => {});
            }
            else
            {
                var i;
                for(i=0;i<response.data.result.length;i++)
                {
                var joined = this.state.threads_arr.concat({thread_name: response.data.result[i].thread_name,thread_user: response.data.result[i].thread_user});
                this.setState({threads_arr: joined});
                }
            }
        })
        .catch(error=>{
            console.log(error);
        });
    }
    //adding threads----
    servercontact_for_add_thread = () => {
        console.log("inside servercontact");

        axios.post('http://localhost:4000/project/threads/createNew',
        {
            thread_name: this.state.add_thread,
            thread_user: this.state.user_name
        })
        .then(response=>{
            console.log(response.data);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({v_error: local},() => {console.log('new state', this.state.v_error)});
            }
            else
            {
                alert("Addition Successfull");
                var join_new = this.state.threads_arr.concat({thread_name: this.state.add_thread,thread_user: this.state.user_name});
                this.setState({threads_arr: join_new});
            }
        })
        .catch(error=>{
            console.log(error);
        });
    }

    handlechange = (e) =>{
        this.setState({[e.target.name] :e.target.value});
    }
    

    handleSubmit = (e) =>{
        e.preventDefault();
        this.servercontact_for_add_thread();
    }
    // end of adding threads---

    // start of clicking of thread----
    servercontact_for_click_thread = (id) => {
        console.log("inside servercontact");

        axios.post('http://localhost:4000/project/posts/get_thread_data',
        {
            thread_name: id
        })
        .then(response=>{
            console.log(response.data.result[0].content);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({posts_fecth_error: local},() => {console.log('new state', this.state.v_error)});
            }
            else
            {
                alert("Retrieval Successfull");
                var i;
                for(i=0;i<response.data.result.length;i++)
                {
                var join_new = this.state.posts_arr.concat({thread_name: response.data.result[i].threadname,thread_user: response.data.result[i].userOfPost,
                content: response.data.result[i].content});
                    this.setState({posts_arr: join_new});
                }
            }
        })
        .catch(error=>{
            console.log(error);
        });
    }

    handlerClickThreads = (e) =>{
        console.log(e.target.id);
        this.setState({ posts_arr: [] },()=>{});
        this.setState({curr_thread_name: e.target.id});
        this.setState({clickedonThread: true});
        this.servercontact_for_click_thread(e.target.id);
    }
    // end of clicking thread----

    //start of adding posts--

    servercontact_for_add_post = () => {
        console.log("inside servercontact");

        axios.post('http://localhost:4000/project/posts/createNew',
        {
            threadname: this.state.curr_thread_name,
            content: this.state.add_post,
            userOfPost: this.state.user_name
        })
        .then(response=>{
            console.log(response.data);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({p_error: local}, () => {console.log('new state', this.state.v_error)});
            }
            else
            {
                alert("Addition Successfull");
                var join_new = this.state.posts_arr.concat({thread_name: this.state.curr_thread_name, thread_user: this.state.user_name, content: this.state.add_post })
                this.setState({posts_arr: join_new})
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    handlepostSubmit = (e) =>{
        e.preventDefault();
        this.servercontact_for_add_post();
    }

    //end of adding posts--


    render(){
        const self = this;
        var namesList = this.state.threads_arr.map(function(i){
            return <a href="#" class="nav-link text-success border border-primary" id={i.thread_name} onClick={self.handlerClickThreads}>{i.thread_name}</a>;
          });
        var postsList = this.state.posts_arr.map(function(i){
        return <div><p class="mt-lg-2 text-left">{i.thread_user}</p>
        <div class="p-2 border border-primary text-justify text-wrap " style={{width: "50rem"}}>{i.content}</div>
        
        </div>
        });
          var i;
          console.log('s');
          for(i=0;i<this.state.posts_arr.length;i++)
          {
              console.log(this.state.posts_arr[i].thread_user);
              console.log(this.state.posts_arr[i].content);
          }
        console.log('e');
        console.log(namesList);
        return(
            <>
            <div class="row mt-lg-2">
                <div class="col-lg-12">
                    <div class="text-center">
                    <p class="d-inline-block mr-3">{this.state.v_error}</p>
                    <p class="d-inline-block mr-3">Username: {this.state.user_name}</p>
                    <p class="d-inline-block mr-3">Email: {this.state.email_id}</p>
                    <p class="d-inline-block mr-3">Country: {this.state.country}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-lg-2">
                <div class="col-lg-3 bd-sidebar">
                    <div class="nav flex-column text-center scroll-menu" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {namesList}
                        <form onSubmit={this.handleSubmit}>
                        <p>{this.state.v_error}</p>
                        <input type="text" class="form-control" name="add_thread" value={this.state.n_thread_name} onChange={this.handlechange}  placeholder="Provide thread name:"/>
                        <input type="submit" className="btn btn-outline-success mt-lg-2 btn-sm"/>
                        </form>
                        
                    </div>
                </div>
                <div class="col-lg-6" className="overflow-y: scroll">
                    <p>Current thread is: {this.state.curr_thread_name}</p>
                    {postsList}
                    {this.state.clickedonThread?
                    <>
                    <form onSubmit={this.handlepostSubmit}>
                        <p>{this.state.p_error}</p>
                        <textarea class="form-control align-text-top" style={{height: "6rem",width: "50rem"}} name="add_post" value={this.state.add_post} onChange={this.handlechange}  placeholder="Add some content" />
                        <input type="submit" className="btn btn-outline-success mt-lg-2 btn-sm"/>
                    </form>
                    <div class="p-2 mt-lg-5" style={{width: "50rem"}}>
                    Click on Any of the Threads to view discussion
                    </div>
                    </>
                    :<></>}
                </div>
                <div class="col-lg-3">
                    <div class="flex-column" aria-orientation="vertical">

                    </div>
                </div>
            </div>
            </>
        );
    }
}