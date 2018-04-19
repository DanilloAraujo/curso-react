import PubSub from 'pubsub-js';

class TratadorErros {

    publicaErros(erros) {
        for (var i = 0; i < erros.errors.length; i++) {
            var erro = erros.errors[i];
            PubSub.publish('erro-validacao', erro);
        }
    }
}
export default TratadorErros;