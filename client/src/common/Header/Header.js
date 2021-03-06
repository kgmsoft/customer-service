import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { LoginOutButton, SalesRepresentativeAuthorization, LoggedInAuthorization } from '../Authorization'
import { observer } from 'mobx-react'
import UsersIcon from './UsersIcon'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      headerExpanded: false
    }
  }

  toggleHeader = () => {
    this.setState(({ headerExpanded }) => {
      return {
        headerExpanded: !headerExpanded
      }
    })
  }

  render () {
    const navbarBurgerClasses = this.state.headerExpanded
      ? 'navbar-burger burger is-active'
      : 'navbar-burger burger'

    const navbarMenuClasses = this.state.headerExpanded
      ? 'navbar-menu is-active'
      : 'navbar-menu'

    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to={'/'} data-cy='app-logo-link'>
            <UsersIcon />
          </Link>

          <a onClick={this.toggleHeader} role='button' className={navbarBurgerClasses} aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className={navbarMenuClasses}>
          <div className='navbar-start'>
            <NavLink exact to={'/'} className='navbar-item' data-cy='home-link' activeClassName='has-text-weight-bold'>
              Home
            </NavLink>

            <SalesRepresentativeAuthorization>
              <NavLink to={'/customer-service'} className='navbar-item' data-cy='customer-service-link' activeClassName='has-text-weight-bold'>
                Customer service
              </NavLink>
            </SalesRepresentativeAuthorization>

            <LoggedInAuthorization>
              <NavLink to={'/profile'} className='navbar-item' data-cy='profile-link' activeClassName='has-text-weight-bold'>
                Profile
              </NavLink>
            </LoggedInAuthorization>

            <NavLink to={'/about'} className='navbar-item' data-cy='about-link' activeClassName='has-text-weight-bold'>
              About
            </NavLink>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons is-centered'>
                <LoginOutButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(observer(Header))
