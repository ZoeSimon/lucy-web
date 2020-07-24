import { MigrationInterface, QueryRunner } from 'typeorm';
import { AppDBMigrator } from '../applicationSchemaInterface';
import { BiologicalTreatmentSchema } from '../database-schema';

export class CreateBiologicalTreatementSchema1595628405283 extends AppDBMigrator implements MigrationInterface {

    // BiologicalTreatmentSchema
    biologicalTreatmentSchema: BiologicalTreatmentSchema;

    setup() {
        // Adding wind direction init schema to migrator
        this.biologicalTreatmentSchema = new BiologicalTreatmentSchema()
        this.addSchemaInitVersion(this.biologicalTreatmentSchema);
        this.addDataImportMigration(this.biologicalTreatmentSchema, 'init');
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Running Migrations
        this.log('[Starting]', 'UP');

        // Biological Treatment
        await queryRunner.query(this.biologicalTreatmentSchema.migrationSQL);

        this.log('[DONE]', 'UP');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Dropping Tables
        // BiologicalTreatmentSchema

        this.log('[STAR]', 'DOWN');

        await queryRunner.query(this.biologicalTreatmentSchema.dropTable());

        this.log('[END]', 'DOWN');
    }

}
