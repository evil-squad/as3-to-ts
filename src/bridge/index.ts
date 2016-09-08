import Node from "../syntax/node";
import Emitter, { EmitterOptions } from "../emit/emitter";

export interface Bridge {
    imports: Map<RegExp, string>;
    visitor: (emitter: Emitter, node: Node) => void;
    postProcessing?: (emitterOptions: EmitterOptions, data: string) => string;
}
