// ** BiologicalTreatmentController ** //

import { RecordController } from '../generic.data.models';
import { BiologicalTreatment } from '../../models';
import { BiologicalTreatmentSchema } from '../../database-schema';


/**
 * @description Data Model Controller Class for BiologicalTreatmentSchema and BiologicalTreatment
 */
export class BiologicalTreatmentController extends RecordController<BiologicalTreatment> {
	/**
	* @description Getter for shared instance
	*/
    public static get shared(): BiologicalTreatmentController {
        return this.sharedInstance<BiologicalTreatment>(BiologicalTreatment, BiologicalTreatmentSchema) as BiologicalTreatmentController;
    }

    async findById(id: number): Promise<BiologicalTreatment> {
        const items: BiologicalTreatment[] = await this.repo.find({ where: { biological_treatment_id: id } }) as BiologicalTreatment[];
        const item: BiologicalTreatment = items[0];
        return item;
    }

	/**
     * @description Method to get all object filtered by query
     * @param object query
     */
    async all(query?: object): Promise<BiologicalTreatment[]> {

        const items: BiologicalTreatment[] = await this.repo.find({ where: query }) as BiologicalTreatment[];
        return items;
    }
}
// ----------------
