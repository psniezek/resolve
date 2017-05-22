const RABBITMQ_HOST = process.env.RABBITMQ_HOST || '127.0.0.1';
const ZMQ_HOST = process.env.ZMQ_HOST || '127.0.0.1';

const RABBITMQ_CONNECTION_URL = process.env.RABBITMQ_CONNECTION_URL
    || `amqp://${RABBITMQ_HOST}:5672`;

const ZMQ_PUB_PORT = process.env.ZMQ_PUB_PORT || 2110;
const ZMQ_SUB_PORT = process.env.ZMQ_SUB_PORT || 2111;

const BENCHMARK_SERIES = [10000, 30000, 100000, 300000, 1000000];

const PAYLOAD_ELEMENTS_COUNT = 3;
const PAYLOAD_ELEMENT_SIZE = 100;

export default {
    BENCHMARK_SERIES,
    PAYLOAD_ELEMENTS_COUNT,
    PAYLOAD_ELEMENT_SIZE,
    RABBITMQ_CONNECTION_URL,
    ZMQ_HOST,
    ZMQ_PUB_PORT,
    ZMQ_SUB_PORT
};
