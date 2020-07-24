/**
 * Imports
 */
import { RecordTableSchema } from './base.record.schema';
import { getYAMLFilePath } from '../../libs/core-database';

/**
 * @description Schema Class for BiologicalTreatmentSchema
 */
export class BiologicalTreatmentSchema extends RecordTableSchema {
    get schemaFilePath(): string {
        return getYAMLFilePath('biologicalTreatment.schema.yaml');
    }
}