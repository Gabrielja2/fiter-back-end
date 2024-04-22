import { NotFoundError, PrizeDrawConfigModel } from "@/layers/use-cases";



export type FindPrizeDrawConfigResponseDTO = PrizeDrawConfigModel[] | NotFoundError;
