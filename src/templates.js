import React from "react";
import moment from 'moment';
import Layout from './components/Layout';
import Button from './components/Button';
import ProgressBar from './components/ProgressBar';
import RewardsList from './components/RewardsList';

import clockIcon from './static/clock.svg';
import { data } from './data/questions.js';
import MultipleChoice from "./components/MultipleChoice";
import ribbonGraphic from './static/Ribbon.svg';
import homeloverImg from './static/homelovers.jpg'
import zapIcon from './static/zap.svg';


export const Home = ({ history }) => {
  return (
    <div>
      <Layout history={history} align="top">
        <img src={ribbonGraphic} alt="" className="ribbon" />
        <h1>Pick more rewards</h1>
        <p>Choose even more rewards that best suit you. Answer a couple more questions about you and your home to pick two rewards that suit you.</p>
        <div className="time-suggestion">
          <img src={clockIcon} alt="" /> <p>Takes around 5 minutes</p>
        </div>
        <Button type={'solid'} label="Start" path="/q/1" />
      </Layout>
    </div>
  );
};

export const Results = ({ history }) => {
  return (
    <div>
      <Layout history={history} align="top">
        <img src={homeloverImg} alt="" className="homelover-img animated bounceIn" />
        <h1>You are a savvy homelover!</h1>
        <p>You spend time on putting your home together. You love your home and everything in it.</p>
        <div className="time-suggestion">
          <img src={zapIcon} alt="" /> <p>Tap through to pick your rewards</p>
        </div>
        <Button type={"solid"} path="/pick-reward" label="Great!" />
      </Layout>
    </div>
  );
};

export const Rewards = ({ history }) => {

  return (
    <div>
      <Layout history={history} align={'top'}>
        <h1>Pick your rewards</h1>
        <p>Pick two rewards to get started. These rewards are valid from today for 6 months.</p>
        <div className="time-suggestion">
          <img src={clockIcon} alt="" /> <p>Rewards will expire on {moment().add(6, 'months').calendar()}</p>
        </div>
        <RewardsList />
      </Layout>
      <div className="button-group">
        <a href="https://mindera.invisionapp.com/share/Q8U3CS7TJY6#/385704569_Home-Landing_-_Full_Access">
          <button class={`button button-solid`}>
            Get rewards
          </button>
        </a>
      </div>
    </div>
  );
};

export const Question = ({ match, history }) => {
  const qNumber = match.params.id
  const Data = data[qNumber - 1];
  const nextQuestionLink = `/q/${Data.id + 1}`;
  return (
    <Layout history={history} align="top">
      <ProgressBar question={qNumber} />
      <p className="question-count">{qNumber} of 14</p>
      <h1>{Data.question}</h1>
      <MultipleChoice questions={Data} type={Data.type} />
      <div className="button-group">
        <Button path={qNumber > 13 ? '/result' : nextQuestionLink} label={qNumber > 13 ? 'Finish' : 'Next'} type={'solid'} />
      </div>
    </Layout>
  );
};