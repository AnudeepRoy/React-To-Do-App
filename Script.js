
//inputs
class Inputs extends React.Component{

	addTask = ()=>{
		let newTask = document.getElementById('inputTask').value;
		this.props.addTask(newTask);
		document.getElementById('inputTask').value='';
	}

	render(){
		return(
				<div className='row'>
					<div className='col-md-2'></div>
					<div className='col-md-6'>
						<input type='text' id='inputTask' className='form-control' placeholder='Enter your task'/>
						</div>
					<div className='col-md-2'>
					<button type='button' onClick={this.addTask} className='btn btn-info btn-block'>Add Task</button>
						</div>
					<div className='col-md-2'></div>

				</div>
			)
		}
	}

//app
class App extends React.Component{



	addTask = (newTask) =>{

		if(newTask == ''){
			return;
		}
		else{

		let colors= ['info','success','warning','danger','primary','dark'];
	
		let ran = Math.floor((Math.random()*((5-0)+1))+0);

		document.getElementById('main').insertAdjacentHTML('beforeend',`
				
				<div class="alert alert-${colors[ran]} alert-dismissible">
  				<button type="button" class="close" onClick={this.closeAlert} data-dismiss="alert">&times;</button>
  				${newTask}
				</div>
				
			`);
		newTask='';
		}
	}

	
	render(){
		return(
			<div className='container'>
				<h1 className='text-center text-info'>TO-DO APP</h1>
				<Inputs addTask={this.addTask}/>
				<br/>
				<div className='row'>
				<div className='col-md-2'></div>

				<div className='col-md-8'>
				<div id='main'>
					
				</div>
				</div>
				<div className='col-md-2'></div>

				</div>
			</div>
			)
		}
	}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)