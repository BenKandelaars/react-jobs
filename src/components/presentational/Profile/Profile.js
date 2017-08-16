import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { ProfileWrapper, ProfileContainer, ProfileNav, ProgressBar, Link, SectionWrapper, First2, Edit, Btn, Inputform, I, TagsForm, SkillTag } from './styles';


export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      show1: true,
      addSkill: '',
      tags: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClick1 = this.onClick1.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const tags = this.state.tags.concat(this.state.inputValue);
    this.setState({
      tags,
      inputValue: '',
      show1: true,
    });
  }

  onClick() {
    this.setState({ show: !this.state.show });
  }
  onClick1() {
    this.setState({ show1: !this.state.show1 });
  }

  addingTags() {
    return this.state.tags.map((tag, i) => (
      <SkillTag key={i} onClick={this.onClick1} showing={this.state.show1}>
        <Btn>{tag} <I className="fa fa-times" aria-hidden="true" /></Btn>
      </SkillTag>
    ),
    );
  }

  skill() {
    return (
      <SectionWrapper>
        <First2>
          <div>
            <p><strong>Skills</strong> My important skills</p>
            <Edit onClick={this.onClick}>
              { this.state.show ?
                <div><I className="fa fa-floppy-o" aria-hidden="true" /> Save</div>
                : <div><I className="fa fa-pencil" aria-hidden="true" /> Edit</div> }

            </Edit>
          </div>
          <Inputform style={{ display: this.state.show ? 'block' : 'none' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })}
              value={this.state.inputValue}
              placeholder="Type in a skill and hit Enter"
            />
          </Inputform>
          <TagsForm>
            {this.addingTags(this.state.addSkill)}
          </TagsForm>
        </First2>
      </SectionWrapper>
    );
  }

  render() {
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
          {this.skill()}
        </ProfileContainer>
      </ProfileWrapper>
    );
  }
}
