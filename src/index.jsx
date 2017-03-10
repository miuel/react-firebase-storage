import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

 
 // Initialize Firebase
const config = {
  apiKey: "AioioioioioioioiocqRLrEUR2Fs",
  authDomain: "react-firebase-storage.firebaseapp.com",
  databaseURL: "https://react-firebase-storage.firebaseio.com",
  storageBucket: "react-firebase-storage.appspot.com",
  messagingSenderId: "487878781942"
};
firebase.initializeApp(config);



class FileUpload extends React.Component {
	constructor () {
	super ()
	this.state = {
		uploadValue: 0
	}
}

handleOnChange (event) {
	const file = event.target.files[0]
	const storageRef = firebase.storage().ref(`pictures/${file.name}`)
	const task = storageRef.put(file)

	task.on('state_changed', (snapshot) => {
		let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
		this.setState({
			uploadValue: percentage
		})
	}, (error) => {
		this.setState({
			message: `Ha ocurrido un error: ${error.message}`
		})
	}, () => {
		this.setState ({
			message: 'Archivo subido!',
			picture: task.snapshot.downloadURL 
		})
	}) 
}

  render () {
      return (
          <div>
            <progress value={this.state.uploadValue} max='100'></progress>
						<br />
						<input type='file' onChange={this.handleOnChange.bind(this)} />
						<br />
						{this.state.message}
						<br />
						<img width='600' src={this.state.picture} />
          </div>    
      )
  }
}

ReactDOM.render(<FileUpload />, document.getElementById('root'))
