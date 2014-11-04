'use strict';

exports.models = {
  'user': {
    'id': 'user',
    'required': ['username', 'provider'],
    'properties': {
      'firstName': {
        'type': 'string',
        'description': 'The User first name.'
      },
      'lastName': {
        'type': 'string',
        'description': 'The User last name.'
      },
      'email': {
        'type': 'string',
        'description': 'The User email.'
      },
      'username': {
        'type': 'string',
        'description': 'The User username.'
      },
      'password': {
        'type': 'string',
        'description': 'The User password.'
      },
      'provider': {
        'type': 'string',
        'description': 'The Provider used for the account creation.'
      },
      'providerData': {
        'type': 'array',
        'description': 'The Provider data.'
      },
      'updated': {
        'type': 'date',
        'description': 'The last update date.'
      },
      'created': {
        'type': 'date',
        'description': 'The account creation date.'
      }
    }
  }
}
