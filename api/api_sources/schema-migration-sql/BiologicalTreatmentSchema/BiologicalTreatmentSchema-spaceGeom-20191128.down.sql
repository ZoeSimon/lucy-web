-- ## Reverting table: biological_treatment
-- ## Version: spaceGeom
-- ## Info: None
-- ## Removing New Columns ## --
ALTER TABLE biological_treatment DROP COLUMN IF EXISTS space_geom_id;

-- ## Updating biological_treatment ## --
