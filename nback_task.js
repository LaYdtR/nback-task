/******************* 
 * Nback_Task *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'nback_task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);


flowScheduler.add(end_practiceRoutineBegin());
flowScheduler.add(end_practiceRoutineEachFrame());
flowScheduler.add(end_practiceRoutineEnd());
const trials_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_loopLoopBegin(trials_loopLoopScheduler));
flowScheduler.add(trials_loopLoopScheduler);
flowScheduler.add(trials_loopLoopEnd);


flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice_conditions.csv.xlsx', 'path': 'practice_conditions.csv.xlsx'},
    {'name': 'nback_conditions.csv.xlsx', 'path': 'nback_conditions.csv.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instr_text;
var instr_key;
var practice_trialClock;
var fixation_prac;
var stim_prac;
var key_resp_prac;
var end_practiceClock;
var text;
var key_resp;
var trialClock;
var fixation;
var stim;
var key_resp2;
var thanksClock;
var thank;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'N-BACK Task\n\nA sequence of letters will appear one at a time\n\nPress SPACEBAR if the CURRENT letter is hte SAME as the PREVIOUS letter\n\nDo NOT press anything if it is different\n\nThere will be 4 practice trials first\nThen 40 real trials\n\nPress SPACEBAR to begin practice',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_trial"
  practice_trialClock = new util.Clock();
  fixation_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_prac',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stim_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_practice"
  end_practiceClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Practice complete!\n\nPress SPACEBAR to begin the real task',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thank = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank',
    text: 'Task complete! Thank you',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionsMaxDurationReached;
var _instr_key_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    instr_key.keys = undefined;
    instr_key.rt = undefined;
    _instr_key_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(instr_key);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_key* updates
    if (t >= 0.0 && instr_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_key.tStart = t;  // (not accounting for frame time here)
      instr_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_key.clearEvents(); });
    }
    
    // if instr_key is active this frame...
    if (instr_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_key.getKeys({keyList: 'space', waitRelease: false});
      _instr_key_allKeys = _instr_key_allKeys.concat(theseKeys);
      if (_instr_key_allKeys.length > 0) {
        instr_key.keys = _instr_key_allKeys[_instr_key_allKeys.length - 1].name;  // just the last key pressed
        instr_key.rt = _instr_key_allKeys[_instr_key_allKeys.length - 1].rt;
        instr_key.duration = _instr_key_allKeys[_instr_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instr_key.corr, level);
    }
    psychoJS.experiment.addData('instr_key.keys', instr_key.keys);
    if (typeof instr_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_key.rt', instr_key.rt);
        psychoJS.experiment.addData('instr_key.duration', instr_key.duration);
        routineTimer.reset();
        }
    
    instr_key.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice_conditions.csv.xlsx',
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      practice_loopLoopScheduler.add(practice_trialRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(practice_trialRoutineEachFrame());
      practice_loopLoopScheduler.add(practice_trialRoutineEnd(snapshot));
      practice_loopLoopScheduler.add(practice_loopLoopEndIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_loop;
function trials_loopLoopBegin(trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'nback_conditions.csv.xlsx',
      seed: undefined, name: 'trials_loop'
    });
    psychoJS.experiment.addLoop(trials_loop); // add the loop to the experiment
    currentLoop = trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_loop of trials_loop) {
      snapshot = trials_loop.getSnapshot();
      trials_loopLoopScheduler.add(importConditions(snapshot));
      trials_loopLoopScheduler.add(trialRoutineBegin(snapshot));
      trials_loopLoopScheduler.add(trialRoutineEachFrame());
      trials_loopLoopScheduler.add(trialRoutineEnd(snapshot));
      trials_loopLoopScheduler.add(trials_loopLoopEndIteration(trials_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_trialMaxDurationReached;
var _key_resp_prac_allKeys;
var practice_trialMaxDuration;
var practice_trialComponents;
function practice_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_trialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    practice_trialMaxDurationReached = false;
    // update component parameters for each repeat
    stim_prac.setText(letter);
    key_resp_prac.keys = undefined;
    key_resp_prac.rt = undefined;
    _key_resp_prac_allKeys = [];
    psychoJS.experiment.addData('practice_trial.started', globalClock.getTime());
    practice_trialMaxDuration = null
    // keep track of which components have finished
    practice_trialComponents = [];
    practice_trialComponents.push(fixation_prac);
    practice_trialComponents.push(stim_prac);
    practice_trialComponents.push(key_resp_prac);
    
    for (const thisComponent of practice_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practice_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_trial' ---
    // get current time
    t = practice_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_prac* updates
    if (t >= 0.0 && fixation_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_prac.tStart = t;  // (not accounting for frame time here)
      fixation_prac.frameNStart = frameN;  // exact frame index
      
      fixation_prac.setAutoDraw(true);
    }
    
    
    // if fixation_prac is active this frame...
    if (fixation_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_prac.tStop = t;  // not accounting for scr refresh
      fixation_prac.frameNStop = frameN;  // exact frame index
      // update status
      fixation_prac.status = PsychoJS.Status.FINISHED;
      fixation_prac.setAutoDraw(false);
    }
    
    
    // *stim_prac* updates
    if (t >= 0.5 && stim_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim_prac.tStart = t;  // (not accounting for frame time here)
      stim_prac.frameNStart = frameN;  // exact frame index
      
      stim_prac.setAutoDraw(true);
    }
    
    
    // if stim_prac is active this frame...
    if (stim_prac.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (stim_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      stim_prac.tStop = t;  // not accounting for scr refresh
      stim_prac.frameNStop = frameN;  // exact frame index
      // update status
      stim_prac.status = PsychoJS.Status.FINISHED;
      stim_prac.setAutoDraw(false);
    }
    
    
    // *key_resp_prac* updates
    if (t >= 0.5 && key_resp_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_prac.tStart = t;  // (not accounting for frame time here)
      key_resp_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_prac.clearEvents(); });
    }
    frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_prac.tStop = t;  // not accounting for scr refresh
      key_resp_prac.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_prac.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_prac.tStop = t;  // not accounting for scr refresh
        key_resp_prac.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_prac.status = PsychoJS.Status.FINISHED;
        key_resp_prac.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_prac is active this frame...
      if (key_resp_prac.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_prac.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_prac_allKeys = _key_resp_prac_allKeys.concat(theseKeys);
        if (_key_resp_prac_allKeys.length > 0) {
          key_resp_prac.keys = _key_resp_prac_allKeys[0].name;  // just the first key pressed
          key_resp_prac.rt = _key_resp_prac_allKeys[0].rt;
          key_resp_prac.duration = _key_resp_prac_allKeys[0].duration;
          // was this correct?
          if (key_resp_prac.keys == corrAns) {
              key_resp_prac.corr = 1;
          } else {
              key_resp_prac.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of practice_trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function practice_trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'practice_trial' ---
      for (const thisComponent of practice_trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('practice_trial.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp_prac.keys === undefined) {
        if (['None','none',undefined].includes(corrAns)) {
           key_resp_prac.corr = 1;  // correct non-response
        } else {
           key_resp_prac.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_prac.corr, level);
      }
      psychoJS.experiment.addData('key_resp_prac.keys', key_resp_prac.keys);
      psychoJS.experiment.addData('key_resp_prac.corr', key_resp_prac.corr);
      if (typeof key_resp_prac.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_prac.rt', key_resp_prac.rt);
          psychoJS.experiment.addData('key_resp_prac.duration', key_resp_prac.duration);
          routineTimer.reset();
          }
      
      key_resp_prac.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (practice_trialMaxDurationReached) {
          practice_trialClock.add(practice_trialMaxDuration);
      } else {
          practice_trialClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var end_practiceMaxDurationReached;
var _key_resp_allKeys;
var end_practiceMaxDuration;
var end_practiceComponents;
function end_practiceRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end_practice' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      end_practiceClock.reset();
      routineTimer.reset();
      end_practiceMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp.keys = undefined;
      key_resp.rt = undefined;
      _key_resp_allKeys = [];
      psychoJS.experiment.addData('end_practice.started', globalClock.getTime());
      end_practiceMaxDuration = null
      // keep track of which components have finished
      end_practiceComponents = [];
      end_practiceComponents.push(text);
      end_practiceComponents.push(key_resp);
      
      for (const thisComponent of end_practiceComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function end_practiceRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end_practice' ---
      // get current time
      t = end_practiceClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text* updates
      if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text.tStart = t;  // (not accounting for frame time here)
        text.frameNStart = frameN;  // exact frame index
        
        text.setAutoDraw(true);
      }
      
      
      // if text is active this frame...
      if (text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp* updates
      if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp.tStart = t;  // (not accounting for frame time here)
        key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of end_practiceComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function end_practiceRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end_practice' ---
      for (const thisComponent of end_practiceComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('end_practice.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      // the Routine "end_practice" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var trialMaxDurationReached;
var _key_resp2_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'trial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      trialClock.reset(routineTimer.getTime());
      routineTimer.add(2.000000);
      trialMaxDurationReached = false;
      // update component parameters for each repeat
      stim.setText(letter);
      key_resp2.keys = undefined;
      key_resp2.rt = undefined;
      _key_resp2_allKeys = [];
      psychoJS.experiment.addData('trial.started', globalClock.getTime());
      trialMaxDuration = null
      // keep track of which components have finished
      trialComponents = [];
      trialComponents.push(fixation);
      trialComponents.push(stim);
      trialComponents.push(key_resp2);
      
      for (const thisComponent of trialComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function trialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'trial' ---
      // get current time
      t = trialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fixation* updates
      if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fixation.tStart = t;  // (not accounting for frame time here)
        fixation.frameNStart = frameN;  // exact frame index
        
        fixation.setAutoDraw(true);
      }
      
      
      // if fixation is active this frame...
      if (fixation.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fixation.tStop = t;  // not accounting for scr refresh
        fixation.frameNStop = frameN;  // exact frame index
        // update status
        fixation.status = PsychoJS.Status.FINISHED;
        fixation.setAutoDraw(false);
      }
      
      
      // *stim* updates
      if (t >= 0.5 && stim.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        stim.tStart = t;  // (not accounting for frame time here)
        stim.frameNStart = frameN;  // exact frame index
        
        stim.setAutoDraw(true);
      }
      
      
      // if stim is active this frame...
      if (stim.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        stim.tStop = t;  // not accounting for scr refresh
        stim.frameNStop = frameN;  // exact frame index
        // update status
        stim.status = PsychoJS.Status.FINISHED;
        stim.setAutoDraw(false);
      }
      
      
      // *key_resp2* updates
      if (t >= 0.5 && key_resp2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp2.tStart = t;  // (not accounting for frame time here)
        key_resp2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp2.clearEvents(); });
      }
      frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp2.tStop = t;  // not accounting for scr refresh
        key_resp2.frameNStop = frameN;  // exact frame index
        // update status
        key_resp2.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.5 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp2.tStop = t;  // not accounting for scr refresh
          key_resp2.frameNStop = frameN;  // exact frame index
          // update status
          key_resp2.status = PsychoJS.Status.FINISHED;
          key_resp2.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp2 is active this frame...
        if (key_resp2.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp2.getKeys({keyList: 'space', waitRelease: false});
          _key_resp2_allKeys = _key_resp2_allKeys.concat(theseKeys);
          if (_key_resp2_allKeys.length > 0) {
            key_resp2.keys = _key_resp2_allKeys[0].name;  // just the first key pressed
            key_resp2.rt = _key_resp2_allKeys[0].rt;
            key_resp2.duration = _key_resp2_allKeys[0].duration;
            // was this correct?
            if (key_resp2.keys == corrAns) {
                key_resp2.corr = 1;
            } else {
                key_resp2.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of trialComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'trial' ---
        for (const thisComponent of trialComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (key_resp2.keys === undefined) {
          if (['None','none',undefined].includes(corrAns)) {
             key_resp2.corr = 1;  // correct non-response
          } else {
             key_resp2.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp2.corr, level);
        }
        psychoJS.experiment.addData('key_resp2.keys', key_resp2.keys);
        psychoJS.experiment.addData('key_resp2.corr', key_resp2.corr);
        if (typeof key_resp2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp2.rt', key_resp2.rt);
            psychoJS.experiment.addData('key_resp2.duration', key_resp2.duration);
            routineTimer.reset();
            }
        
        key_resp2.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (trialMaxDurationReached) {
            trialClock.add(trialMaxDuration);
        } else {
            trialClock.add(2.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'thanks' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        thanksClock.reset(routineTimer.getTime());
        routineTimer.add(3.000000);
        thanksMaxDurationReached = false;
        // update component parameters for each repeat
        psychoJS.experiment.addData('thanks.started', globalClock.getTime());
        thanksMaxDuration = null
        // keep track of which components have finished
        thanksComponents = [];
        thanksComponents.push(thank);
        
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function thanksRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'thanks' ---
        // get current time
        t = thanksClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *thank* updates
        if (t >= 0.0 && thank.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          thank.tStart = t;  // (not accounting for frame time here)
          thank.frameNStart = frameN;  // exact frame index
          
          thank.setAutoDraw(true);
        }
        
        
        // if thank is active this frame...
        if (thank.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (thank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          thank.tStop = t;  // not accounting for scr refresh
          thank.frameNStop = frameN;  // exact frame index
          // update status
          thank.status = PsychoJS.Status.FINISHED;
          thank.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of thanksComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function thanksRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'thanks' ---
        for (const thisComponent of thanksComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (thanksMaxDurationReached) {
            thanksClock.add(thanksMaxDuration);
        } else {
            thanksClock.add(3.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
