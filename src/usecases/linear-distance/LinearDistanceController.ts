import { Response } from "express";
import { LinearDistanceService } from "./LinearDistanceService";
import { DistanceRequestDTO } from "../../dtos";

export class FetchBrandsController {
	constructor(private linearDistanceService: LinearDistanceService) {}

	async handle(
		request: DistanceRequestDTO,
		response: Response,
	): Promise<Response> {
		try {
			const result = await this.linearDistanceService.execute(request);

			return response.status(200).send(result);
		} catch (error: any) {
			return response.status(400).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
