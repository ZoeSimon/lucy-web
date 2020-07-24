-- ### Creating Table: biological_treatment ### --

        
CREATE TABLE biological_treatment ();
ALTER TABLE biological_treatment ADD COLUMN biological_treatment_id SERIAL PRIMARY KEY;


        
-- ### Creating Comments on table ### --

        
COMMENT ON TABLE biological_treatment IS 'An application of a biological treatment.';
COMMENT ON COLUMN biological_treatment.biological_treatment_id IS 'Auto generated sequential primary key column.';


        
-- ### Creating Timestamp column ### --

        
ALTER TABLE biological_treatment ADD COLUMN created_at TIMESTAMP DEFAULT NOW();
ALTER TABLE biological_treatment ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
COMMENT ON COLUMN biological_treatment.created_at IS 'Timestamp column to check creation time of record';
COMMENT ON COLUMN biological_treatment.updated_at IS 'Timestamp column to check modify time of record';

        
-- ### Creating User Audit Columns ### --

        
ALTER TABLE biological_treatment ADD COLUMN updated_by_user_id INT NULL DEFAULT NULL REFERENCES application_user(user_id) ON DELETE SET NULL;
ALTER TABLE biological_treatment ADD COLUMN created_by_user_id INT NULL DEFAULT NULL REFERENCES application_user(user_id) ON DELETE SET NULL;
COMMENT ON COLUMN biological_treatment.updated_by_user_id IS 'Audit column to track creator';
COMMENT ON COLUMN biological_treatment.created_by_user_id IS 'Audit column to track modifier';
 -- ### End: biological_treatment ### --
