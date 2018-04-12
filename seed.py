from gene_app.models import Person

Person.objects.to_csv(
	'/Users/darien/Desktop/testing.csv',
	dict(first_name='first_name', last_name='last_name')
)

COPY gene_app_gene (gene,nucleotide_change, protein_change, other_mappings, alias, transcripts, region, reported_classification, inferred_classification, source, last_evaluated, last_updated, url, submitter_comment, assembly, char, genomic_start, genomic_stop, ref, alt, accession, reported_ref, reported_alt) FROM '/Users/darien/Desktop/variants.csv' with csv header;