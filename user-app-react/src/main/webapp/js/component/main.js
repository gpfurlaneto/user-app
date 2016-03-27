
var Panel = ReactBootstrap.Panel;
var ButtonInput = ReactBootstrap.ButtonInput;
var Input = ReactBootstrap.Input;
var Label = ReactBootstrap.Label;

var LonginPanel = React.createClass({
render: function () {
	
    return (
    		
    		
    		
    			
    			<Panel header={<h3>User-App</h3>} bsStyle='primary loginPanel'>
    		    	<form>
    		 			<Input type="email" label="Email Address" placeholder="Enter email" />
    		 			<div className="inputContainer">
    		 				<Input type="password" label="Password" placeholder="Enter password" bsSize="small"/>
    		 				<a href="#" className="link_inside_input">Esqueceu a senha?</a>
    		 			</div>
    			    	<ButtonInput type='submit' value='Enter' bsStyle='primary size_100'/>
    		 		</form>
    		 	</Panel>
    		);
  		}
	});
ReactDOM.render(<LonginPanel/>,	 document.getElementById('content'));