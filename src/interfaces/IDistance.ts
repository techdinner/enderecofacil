import { DistanceRequestDTO } from "../dtos/DistanceRequestDTO";
import { DistanceResponseDTO } from "../dtos/DistanceResponseDTO";

export interface IDistance {
	execute(req: DistanceRequestDTO): Promise<DistanceResponseDTO>;
}
