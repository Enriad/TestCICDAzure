[
  {
    'name': 'no-ack',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'type': 'simple',
    'params': [
      {
        'time-limit': 5
      }
    ]
  },
  {
    'name': 'message-sizes-and-producers',
    'type': 'varying',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'params': [
      {
        'time-limit': 5,
        'consumer-count': 0
      }
    ],
    'variables': [
      {
        'name': 'min-msg-size',
        'values': [
          0,
          1000,
          10000,
          100000
        ]
      },
      {
        'name': 'producer-count',
        'values': [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ]
      }
    ]
  },
  {
    'name': 'message-sizes-large',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'type': 'varying',
    'params': [
      {
        'time-limit': 5
      }
    ],
    'variables': [
      {
        'name': 'min-msg-size',
        'values': [
          5000,
          10000,
          50000,
          100000,
          500000,
          1000000
        ]
      }
    ]
  },
  {
    'name': 'rate-vs-latency',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'type': 'rate-vs-latency',
    'params': [
      {
        'time-limit': 5
      }
    ]
  },
  {
    'name': 'consume',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'type': 'simple',
    'params': [
      {
        'time-limit': 5,
        'producer-count': 4,
        'consumer-count': 2
      }
    ]
  },
  {
    'name': 'no-ack-long',
    'uri': 'amqp://daniel:r4bb1t@rabbitmq-sym-dev.adslot.com:80',
    'type': 'simple',
    'interval': 10000,
    'params': [
      {
        'time-limit': 500
      }
    ]
  }
]