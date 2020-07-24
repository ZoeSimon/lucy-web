// ** Model: BiologicalTreatment from schema BiologicalTreatmentSchema **

import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';
import { BiologicalTreatmentSchema } from '../database-schema';
import {
	SpaceGeomSchema
} from '../database-schema';

import { ModelProperty, PropertyType, ModelDescription } from '../../libs/core-model';
import {
	SpaceGeom
} from '../models';

import { Record } from './generic.data.models';

/** Interface **/
/**
 * @description BiologicalTreatment create interface
 */
export interface BiologicalTreatmentSpec {
	spaceGeom: SpaceGeom;
}
// -- End: BiologicalTreatmentSpec --


/** Interface **/
/**
 * @description BiologicalTreatment update interface
 */
export interface BiologicalTreatmentUpdateSpec {
	spaceGeom?: SpaceGeom;
}
// -- End: BiologicalTreatmentUpdateSpec --

/**
 * @description Data Model Class for BiologicalTreatmentSchema
 */
@ModelDescription({
	description: 'Data Model Class for BiologicalTreatmentSchema',
	schema: BiologicalTreatmentSchema,
	apiResource: false
})
@Entity( { name: BiologicalTreatmentSchema.dbTable} )
export class BiologicalTreatment extends Record implements BiologicalTreatmentSpec {

	/**
	 * Class Properties
	 */

	/**
	 * @description Getter/Setter property for column {biological_treatment_id}
	 */
	@PrimaryGeneratedColumn()
	@ModelProperty({type: PropertyType.number})
	biological_treatment_id: number;

	/**
	 * @description Getter/Setter property for column {space_geom_id}
	 */
	@ManyToOne( type => SpaceGeom, { eager: true})
	@JoinColumn({ name: BiologicalTreatmentSchema.columns.spaceGeom, referencedColumnName: SpaceGeomSchema.pk})
	@ModelProperty({type: PropertyType.object})
	spaceGeom: SpaceGeom;

}

// -------------------------------------
