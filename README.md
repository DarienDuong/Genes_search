Create database for Django backend
  1. Go into PostgreSQL in terminal - psql
  2. Drop database in case there's a table that already exists with the same name to avoid conflicts - DROP DATABASE genedb;
  3. Create database - CREATE DATABASE genedb;
  4. Connect to database - \c genedb;
  5. COMPLETE DOWNLOAD DJANGO/REACT INSTRUCTIONS AND THEN PROCEED TO STEP 6
  6. Populate table with data from csv (your path to csv file will vary) - COPY gene_app_gene (gene,nucleotide_change, protein_change, other_mappings, alias, transcripts, region, reported_classification, inferred_classification, source, last_evaluated, last_updated, url, submitter_comment, assembly, char, genomic_start, genomic_stop, ref, alt, accession, reported_ref, reported_alt) FROM '/Users/darien/Desktop/variants.csv' with csv header;
  

Download Django/React app and set up virtual environment
  1. Setup virtual env - mikvirtualenv name
  2. Install python dependencies - pip install -r requirements.txt
  3. Install javascript dependencies - npm install
  4. Make DB migrations - python manage.py migrate;

Starting the app
  1. In the virtual env type python manage.py runserver

Running tests
  1. Running the python tests - python manage.py test
  2. Running the enzyme(javascript) tests - npm test (press a aftewards)

