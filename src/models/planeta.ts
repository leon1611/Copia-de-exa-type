enum TipoRecurso {
    Mineral,
    Gas,
    Agua
}

class Planeta {
    constructor(public tipoRecurso: TipoRecurso, public peligros: string[]) {}
}

export { Planeta, TipoRecurso };