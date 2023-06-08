import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Dialog from '@material-ui/core/Dialog';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.css'
//dev
const api_base_url = 'http://localhost:9000'
//prod
//const api_base_url = 'https://opim-big-data-analytics.ue.r.appspot.com'

function MainPost(props) {
    return (
      //MAIN MESSAGE TO BE LABELED
    <div> 
      <p>Tweet by @slpng_giants <strong>(tag this statement)</strong>:</p> 
      <div className='main-post'>
        {props.text}
      </div>
      
    </div>
    )
  }

function SubPost(props) {
  return ( //MAIN MESSAGE WAS IN RESPONSE TO
    <div className='grid-container'>
      <div className='response-arrow'>
      
      </div>
      <p>@slpng_giants is responding to:</p>
      <div className='sub-post'>
        {props.text}
      </div>
    </div>
    )
}
class FrameType extends React.Component {
  render() {
    return (
    <button className={this.props.isSelected ? 'example_d':'example_c'} 
            onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

const useStyles = makeStyles((theme) => ({ 
  modal: {
    top:'10%',
    left:'10%',
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    height: '100%',
    overflow:'scoll',
    maxHeight: '600px'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  }
}));

function TransitionsModal () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (

    <div>
      <Button variant="contained" type="button" onClick={handleOpen}>
        Instructions
      </Button>
    
    <Dialog
    aria-labelledby="trainsition-modal-title"
    aria-describedby="transition-modal-description"
    disableScrollLock={false}
    className={classes.modal}
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}>
      <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">INSTRUCTIONS</h2>
              <p id="transition-modal-description">Label tweets from followers of @slpng_giants. For context, 
              @slpng_giants organizes social media users to discourage companies from advertising on what the consider to be <q>harmful media outlets</q>. 
              </p> 
              <p id="transition-modal-description">Label each Tweet with one of two labels/categories <strong>Click on one </strong>
              label that best describes the tweet (to deselect, click again). </p> 
              <p>The labels are:</p>
              <p id="transition-modal-description"><strong>Denounces Hate Speech/Supports @Slpng_giants: </strong> 
              The tweet shows support for slpng_giants or identifies <q>hate speech</q> and right-wing media as a problem</p>
              <ul id="transition-modal-description">
                <li> i don't know who to ask to figure out a way to block #bannon from 
                  coming to #toronto hosted by @munkschool to bring more hate to canada
                  @davidfrum is participating i guess he thinks 
                  bannon proud boys incels etc are still worth wasting words on</li>
              </ul>
              <p id="transition-modal-description"><strong>None: </strong> 
              None of the above tags or labels describe the Tweet.</p>
              
              <p id="transition-modal-description"><strong>________________________________________________________________________</strong></p>
              <p id="transition-modal-description"><strong>Offensive Language Warning:</strong></p> 
              <p id="transition-modal-description">There is a  slight chance that some tweets can contain adult language. If you are offended by such language, 
              please do not attempt this HIT.</p>
              <p id="transition-modal-description"><strong>Payment:</strong></p> 
              <p id="transition-modal-description">There are several validation checks (tweets) in the HIT. You will be paid based on a proportion of how many of those validation tweets you correctly label. Additionally, 
              you will be paid in proportion to the number of items you complete, 5 cents per item. We offer a bonus of $1-$2 for excellent quality work.
              </p>
              <p id="transition-modal-description">If you agree with these instructions, please click outside this dialog box to continue and &quot;Accept &amp; Work&quot;. <strong>By continuing you are agreeing to these terms.</strong> </p>
              <p id="transition-modal-description">You can see these instructions at any time by clicking the "Instructions" button</p>
            </div>
          </Fade>
      </Dialog>
      </div>
    /*
    <div>
      <Button variant="contained" type="button" onClick={handleOpen}>
        Instructions
      </Button>
      <Dialog
        aria-labelledby="trainsition-modal-title"
        aria-describedby="transition-modal-description"
        disableScrollLock={false}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">INSTRUCTIONS</h2>
              <p id="transition-modal-description">Label tweets from @slpng_giants. For context, 
              @slpng_giants organizes social media users to discourage companies from advertising on <q>harmful media outlets</q>. </p> 
              <p id="transition-modal-description">A tweet can fall into one or more labels (tags). <strong>Click on one or more </strong>
              labels that best describes the tweet. <strong>Click on ALL appropriate buttons </strong> to select them (to deselect, click again). 
              <strong>Earn a bonus for excellent work!</strong> </p> 
              <p>The labels are:</p>
              <p id="transition-modal-description"><strong>Higlights a Problem: </strong> 
              The tweet points out that something wrong is going on, e.g.</p>
              <ul id="transition-modal-description">
                <li> Point taken. Blackmail is definitely beyond the pale. 
                The point is that there are many ways to violate journalistic 
                ethics and he has thus far shown that he's willing to support 
                organizations that seem to violate them on the regular. 
                You either believe in ethics or you don't.</li>
                <li>
                  Ingraham is absolutely dedicated to unabashed racism and there's no one stopping her from spewing it.
                </li>
              </ul>
              <p id="transition-modal-description"><strong>Suggests an action: </strong> 
              The Tweet suggests a course of action or offers a solution to something, e.g.</p>
              <ul id="transition-modal-description">
                <li> Advertisers, the ones who are still left, should leave this show now. 
                  If you depend on consumers and employees of all backgrounds, 
                  remaining on this show is dangerous for your brand.</li>
              </ul>
              <p id="transition-modal-description"><strong>Shows gratitude: </strong> 
              The Tweet/Thread is expressing sincere gratitude. e.g.</p>
              <ul id="transition-modal-description">
                <li>Thank you, @KEEN, for both letting us know and taking the issue up with @amazon.</li>
              </ul>
              <p id="transition-modal-description"><strong>Reports/Celebrates Success: </strong> 
              The tweet is celebbrating or reporting that a company has removed its ads from a site. e.g.</p>
              <ul id="transition-modal-description">
                <li>CONFIRMED: @PennLPSOnline© has blocked Breitbart from their media buy!”</li>
              </ul>
              <p id="transition-modal-description"><strong>None: </strong> 
              None of the above tags or labels describe the Tweet.</p>
              <p id="transition-modal-description"><strong>You can click on multiple lables if the tweet is suggesting multiple labels. </strong></p>
              <p id="transition-modal-description"><strong>________________________________________________________________________</strong></p>
              <p id="transition-modal-description"><strong>Offensive Language Warning:</strong></p> 
              <p id="transition-modal-description">There is a  slight chance that some tweets can contain adult language. If you are offended by such language, 
              please do not attempt this HIT.</p>
              <p id="transition-modal-description"><strong>Payment:</strong></p> 
              <p id="transition-modal-description">There are several validation checks (tweets) in the HIT. You will be paid based on a proportion of how many of those validation tweets you correctly label. Additionally, 
              you will be paid in proportion to the number of items you complete, 5 cents per item. We offer a bonus of $1-$2 for excellent quality work.
              </p>
              <p id="transition-modal-description">If you agree with these instructions, please click outside this dialog box to continue and &quot;Accept &amp; Work&quot;. <strong>By continuing you are agreeing to these terms.</strong> </p>
              <p id="transition-modal-description">You can see these instructions at any time by clicking the "Instructions" button</p>
            </div>
          </Fade>
      </Dialog>
    </div>
    */
  );
}

class JobTracker extends React.Component {
/*
  callAPI() {
    var out = ''; 
    fetch(`https://opim-big-data-analytics.ue.r.appspot.com//testAPI/getPositionInHIT?htid=${this.props.htid}`)
      .then(res => res.json()).then(data => {
        this.setState({curr: data});
        this.setState({responseReady: true});
      });
  }

  componentDidMount() {
    this.callAPI()
  }
*/
  render() { 

    return (
      <p>{`${this.props.curr_rank}/${this.props.total_num}`}</p>
    )
  
  }

}

class Observation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id_num: this.props.values,
      diagnostic_is_selected: false,
      prognostic_is_selected: false,
      motivational_is_selected: false,
      success_is_selected: false,
      gratitude_is_selected: false,
      no_framing_is_selected: false,
      action_is_selected: false,
      consensus_is_selected: false,
      responseReady: false,
      observation_type: false,
      observation_main: '',
      observation_inreplyto: '',
      observation_num: 0,
      max_observations: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }  
  
  callAPI() {
    const call_url = `${api_base_url}/testAPI/getAnObservation?oid=${this.props.oid}&turkid=${this.props.turkid}`;
    console.log(call_url);
    fetch(call_url)
      .then(res => res.json()).then(data => {
        this.setState({observation_main: data[0].main_text, observation_num: data[0].rank_value, max_observations: data[0].max_observations});
        this.setState({observation_inreplyto: data[0].in_response_text, observation_type: data[0].observation_type})
        if (data[0].frameid) {
          data.forEach(row => {
            switch(row.frameid) {
              case 1:
                this.setState({diagnostic_is_selected: true});
                break;
              case 2:
                this.setState({prognostic_is_selected: true});
                break;
              case 3:
                this.setState({motivational_is_selected: true});
                break;
              case 5:
                this.setState({gratitude_is_selected: true});
                break;
              case 7:
                this.setState({success_is_selected: true});
                break;
              case 6:
                this.setState({no_framing_is_selected: true});
                break;
              case 8:
                this.setState({consensus_is_selected: true});
                break;
              case 4:
                this.setState({action_is_selected: true});
                break;
          }
          });
        }
        this.setState({responseReady: true})
      });
  }

  componentDidMount() {
    this.callAPI()
  }

  handleClick() {
    this.props.onClick(this.state.diagnostic_is_selected,
      this.state.prognostic_is_selected,
      this.state.success_is_selected,
      this.state.gratitude_is_selected,
      this.state.no_framing_is_selected,
      this.state.action_is_selected,
      this.state.consensus_is_selected)
  }
  handleBackClick() {
    //changes to current hit will be lost
    this.props.onBackClick(this.state.observation_num)
  }
  selectDiagFrame() {
    const diagnostic_is_selected = this.state.diagnostic_is_selected
    this.setState({diagnostic_is_selected: !diagnostic_is_selected})
  }
  selectProgFrame() {
    const prognostic_is_selected = this.state.prognostic_is_selected
    this.setState({prognostic_is_selected: !prognostic_is_selected})
  }
  selectMotiFrame() {
    const motivational_is_selected = this.state.motivational_is_selected
    this.setState({motivational_is_selected: !motivational_is_selected})
  }
  selectSuccessFrame(){
    const success_is_selected = this.state.success_is_selected;
    this.setState({success_is_selected: !success_is_selected});
  }
  selectGratitudeFrame(){
    const gratitude_is_selected = this.state.gratitude_is_selected;
    this.setState({gratitude_is_selected: !gratitude_is_selected});
  }
  selectNoFrame() {
    const no_framing_is_selected = this.state.no_framing_is_selected;
    this.setState({no_framing_is_selected: !no_framing_is_selected});
  }
  selectActionMobilization() {
    const action_is_selected = this.state.action_is_selected;
    this.setState({action_is_selected: !action_is_selected});
  }
  selectConsensusMobilization(){
    const consensus_is_selected = this.state.consensus_is_selected;
    this.setState({consensus_is_selected: !consensus_is_selected});
  }
  handleSubmitClick() {
    this.props.onSubmitClick(this.state.diagnostic_is_selected,
      this.state.prognostic_is_selected,
      this.state.motivational_is_selected)
  }

  render() {
      if (this.state.responseReady) {
        let obs_body;
        let nav_buttons;
        if (this.state.observation_inreplyto != null)
        {
          obs_body = <div><MainPost text={`${this.state.observation_main}`}/> 
          <SubPost text={`${this.state.observation_inreplyto}`}/></div>
        }
        else {
          obs_body = <MainPost text={`${this.state.observation_main}`}/>
        }
        if (this.state.observation_num > 1) {
          nav_buttons = <div className='next-btn-container'>
          <button className='square-btn' onClick={() => this.handleBackClick()}>
            <i className='fa fa-chevron-left'></i> Back
          </button>
          <button className='square-btn' onClick={this.handleClick}>
            <i className='fa fa-chevron-right'></i> Next Unlabeled
          </button>
        </div>
        }
        else {
          nav_buttons =
          <div className='next-btn-container'>
            <button className='square-btn' onClick={this.handleClick}>
              <i className='fa fa-chevron-right'></i> Next
            </button>
          </div>
        }
        if (this.state.observation_num == this.state.max_observations)
        {
          const submitLink = `https://www.mturk.com/mturk/externalSubmit`
          nav_buttons = 
          <div className='next-btn-container'>
          <form onSubmit={this.handleSubmitClick} action={submitLink} method="POST">
            <input id="assignmentId" name="assignmentId" type="hidden" value={this.props.assignmentId} />
            <input id="answer" name="answer" type="hidden" value="worker has completed all elements of this HIT" />
            <button className='square-btn' onClick={() => this.handleBackClick()}>
              <i className='fa fa-chevron-left'></i> Back
            </button>
            <button className='square-btn' type="submit">
              <i className='fa fa-chevron-right'></i> Submit
            </button>
          </form>
          </div>
        }
        if (!this.state.observation_type || this.state.observation_type == 'frame')
        {
        return (
            <div>
              <JobTracker curr_rank={this.state.observation_num}
                          total_num={this.state.max_observations} 
                          htid={this.props.hitid}/>
              
              {obs_body}
              <FrameType value='Higlights a Problem' 
                      isSelected={this.state.diagnostic_is_selected}
                      onClick={() => this.selectDiagFrame()}/>
              <FrameType value='Suggests an Action'
                        isSelected={this.state.prognostic_is_selected}
                        onClick={() => this.selectProgFrame()} />
              <FrameType value='Expresses Gratitude'
                        isSelected={this.state.gratitude_is_selected}
                        onClick={() => this.selectGratitudeFrame()} />
              <FrameType value='Report/Celebrate Success'
                      isSelected={this.state.success_is_selected}
                      onClick={() => this.selectSuccessFrame()} />
              <FrameType value='None'
                      isSelected={this.state.no_framing_is_selected}
                      onClick={() => this.selectNoFrame()} />
              {nav_buttons}
            </div>
          );
        }
        else if (this.state.observation_type == 'participant/sg_related' || this.state.observation_type == 'participant/sg_unrelated') {
          return(
            <div>
            <JobTracker curr_rank={this.state.observation_num}
                          total_num={this.state.max_observations} 
                          htid={this.props.hitid}/>
            {obs_body}
            <FrameType value='Denounces Hate Speech/Supports @slpng_giants'
                isSelected={this.state.consensus_is_selected}
                onClick={() => this.selectConsensusMobilization()} />
            <FrameType value='None'
                  isSelected={this.state.no_framing_is_selected}
                  onClick={() => this.selectNoFrame()} />
            {nav_buttons}
          </div>
          );
        }
      }
      else {
        return (
          <div>
            <JobTracker id_num={this.state.id_num}
                        total_num={'100'} 
                        htid={this.props.hitid}/>
            
            <MainPost text={'Loading...'}/>
            <FrameType value='Higlights a Problem' 
                      isSelected={this.state.diagnostic_is_selected}
                      onClick={() => this.selectDiagFrame()}/>
            <FrameType value='Suggests an Action'
                      isSelected={this.state.prognostic_is_selected}
                      onClick={() => this.selectProgFrame()} />
            <FrameType value='Expresses Gratitude'
                      isSelected={this.state.motivational_is_selected}
                      onClick={() => this.selectMotiFrame()} />
            <FrameType value='Report/Celebrate Success'
                      isSelected={this.state.motivational_is_selected}
                      onClick={() => this.selectMotiFrame()} />
            <FrameType value='None'
                      isSelected={this.state.motivational_is_selected}
                      onClick={() => this.selectMotiFrame()} />
          </div>
        );
      }
    }
  }


class HIT extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      hitid: null,
      observations: [],
      responseReady: false,
      turkid: null,
      redirect_to_submit: null,
    }
    this.getNext = this.getNext.bind(this);
    this.getLast = this.getLast.bind(this);
    this.submitHIT = this.submitHIT.bind(this);
  }

  callAPI() {
    this.setState({responseReady:false});
    const api_url = `${api_base_url}/testAPI/getObservations?hitid=${this.props.hitid}`+
    `&turkid=${this.props.turkid}`;
    this.setState({turkid:this.props.turkid})
    console.log(api_url);
    fetch(api_url).then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({observations: data[0]});
          this.setState({responseReady: true});
      });
  }
  
  componentDidMount() {
    this.callAPI();
  }

  getNext(df, pf, sf, gf, nf, am, cm) {
    //todo: make api call to submit annotation, get confirmation of new row insert,
    //then make another call to update observations in the HIT state 
    const api_url = `${api_base_url}/testAPI/submitAnnotation?hitid=${this.props.hitid}`+
                    `&turkid=${this.state.turkid}&oid=${this.state.observations.oid}&gf=${gf}`+
                    `&pf=${pf}&df=${df}&sf=${sf}&nf=${nf}&am=${am}&cm=${cm}`;
    fetch(api_url).then(res => res.json()).then(data => 
      {
        if (data.status == 'OK') {
          this.callAPI()
      } 
    });
  }

  getLast(rank_value) {
    if (rank_value > 1) {
      this.setState({responseReady:false});
      const api_url = `${api_base_url}/testAPI/getAnObservation?hitid=${this.props.hitid}`+
                      `&value_rank=${rank_value}&turkid=${this.props.turkid}`;
      console.log(api_url);
      fetch(api_url).then(res => res.json()).then(data => {
        console.log(data); 
        this.setState({observations: data[0]});
        this.setState({responseReady:true});})
    }
  }
//CHANGE TO ACTUAL MTURK NOT SANDBOX
  submitHIT(df, pf, sf, gf, nf,am,  cm) {
    const api_url = `${api_base_url}/testAPI/submitAnnotation?hitid=${this.props.hitid}`+
                    `&turkid=${this.state.turkid}&oid=${this.state.observations.oid}&sf=${sf}`+
                    `&pf=${pf}&df=${df}&gf=${gf}&nf=${nf}&am=${am}&cm=${cm}`;
    fetch(api_url).then(res => res.json()).then(data => 
      {
        if (data.status == 'OK') {
          const submitLink = `https://www.mturk.com/mturk/externalSubmit?assignmentId=${this.props.assignmentId}`
          this.setState({redirect_to_submit: submitLink})
      } 
    });
  }
  render() {
    /*
    if (this.state.redirect_to_submit) {
      return (
        <Redirect to={this.state.redirect_to_submit} ></Redirect>
      );
    }
    */
    if (this.state.responseReady && this.state.observations) {
      return (
        <div>
          <Observation oid={this.state.observations.oid} 
            hitid={this.props.hitid} 
            onClick={this.getNext}
            onBackClick={this.getLast}
            onSubmitClick={this.submitHIT}
            turkid={this.props.turkid}
            assignmentId={this.props.assignmentId}/>
        </div>
      );
    } else if (!this.state.observations) {
      return (<p>this HIT is complete!! please close this window.</p>)
    } else
    {
      return (
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      );
    }
  }
}

class Navigation extends React.Component {
  render()
  {
    const raw_query = new URLSearchParams(this.props.location.search);
    //conditionally return "Next" or "Finish" at the end of the HIT
    //getsghit?htid=1&mturkid=1
    
    return (
      <div>
        <HIT hitid={raw_query.get('htid')} turkid={raw_query.get('workerId')} assignmentId={raw_query.get('assignmentId')}></HIT>
        <TransitionsModal />
      </div>
    );
  }
}

ReactDOM.render(<Router >
                  <div>
                    <Route exact path='/getsghit' component={Navigation} />
                    <Route exact path='/getpartyhit' component={Navigation} />
                  </div>
                </Router>, document.getElementById('root'))
//TODO create grat