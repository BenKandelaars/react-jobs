import React, { Component } from 'react';
import { SkillSection } from './SkillSection';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, Link } from './styles';


export function Profile() {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <ProfileNav>
          <ul>
            <li><Link to="/">My Profile & CV</Link></li>
            <li><Link to="/">My Preferences</Link></li>
          </ul>
        </ProfileNav>
        <ProgressBar>
          <span>Here we will drop avatar and lift it up to cover space in between of 2 tabs</span>
        </ProgressBar>
        <SkillSection />
      </ProfileContainer>
    </ProfileWrapper>
  );
}
