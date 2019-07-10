-- ### Creating Table: jurisdiction_code_table ### --

        
CREATE TABLE jurisdiction_code_table ();
ALTER TABLE jurisdiction_code_table ADD COLUMN jurisdiction_code_id SERIAL PRIMARY KEY;
ALTER TABLE jurisdiction_code_table ADD COLUMN jurisdiction_code VARCHAR(10) NOT NULL UNIQUE;
ALTER TABLE jurisdiction_code_table ADD COLUMN description VARCHAR(50) NULL;
ALTER TABLE jurisdiction_code_table ADD COLUMN active_ind BOOLEAN NOT NULL DEFAULT TRUE;


        
-- ### Creating Comments on table ### --

        
COMMENT ON TABLE jurisdiction_code_table IS 'Jurisdiction code of observation area';
COMMENT ON COLUMN jurisdiction_code_table.jurisdiction_code_id IS 'Auto generated primary key';
COMMENT ON COLUMN jurisdiction_code_table.jurisdiction_code IS 'Unique code value for jurisdiction area';
COMMENT ON COLUMN jurisdiction_code_table.description IS 'Description of code';
COMMENT ON COLUMN jurisdiction_code_table.active_ind IS 'Indicator to check active status of code';


        
-- ### Creating Timestamp column ### --

        
ALTER TABLE jurisdiction_code_table ADD COLUMN created_at TIMESTAMP DEFAULT NOW();
ALTER TABLE jurisdiction_code_table ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
COMMENT ON COLUMN jurisdiction_code_table.created_at IS 'Timestamp column to check creation time of record';
COMMENT ON COLUMN jurisdiction_code_table.updated_at IS 'Timestamp column to check modify time of record';

        
-- ### Creating User Audit Columns ### --

        
ALTER TABLE jurisdiction_code_table ADD COLUMN updated_by_user_id INT NULL DEFAULT NULL REFERENCES application_user(user_id) ON DELETE SET NULL;
ALTER TABLE jurisdiction_code_table ADD COLUMN created_by_user_id INT NULL DEFAULT NULL REFERENCES application_user(user_id) ON DELETE SET NULL;
COMMENT ON COLUMN jurisdiction_code_table.updated_by_user_id IS 'Audit column to track creator';
COMMENT ON COLUMN jurisdiction_code_table.created_by_user_id IS 'Audit column to track modifier';
 -- ### End: jurisdiction_code_table ### --
