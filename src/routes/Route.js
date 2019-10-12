/**
 * Trata do redirecionamento de usuários logados ou não logadas para a referida página
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  // Se não logado e privado, redireciona para SingIn
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se logado e não privado, redireciona para Dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
