import React, { Component } from 'react';
import { data } from '../data/questions';
import shoppingBag from '../static/shopping-bag.svg';
import truckIcon from '../static/truck.svg';
import teaIcon from '../static/tea.svg';
import awardIcon from '../static/award.svg';

class RewardsList extends Component {
  render() {
    const Rewards = [
      {
        label: 'Early Access to Sales',
        icon: shoppingBag,
        selected: true
      },
      {
        label: 'Delivery Pass',
        icon: truckIcon,
        selected: true
      },
      {
        label: 'Free cream tea in store',
        icon: teaIcon,
        selected: false
      },
      {
        label: 'Extended warranty and garuntee',
        icon: awardIcon,
        selected: false
      }
    ]
    return (
      <ul className="multi-choice multi-choice__rewards">
        {Rewards.map(reward => {
          return (
            <li className={!reward.selected ? "choice__reward" : "choice__reward is-selected"}>
              <picture><img src={reward.icon} /></picture>
              <p>{reward.label}</p>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default RewardsList;