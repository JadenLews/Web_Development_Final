ALTER TABLE cc_payment
ADD CONSTRAINT amount_due_non_neg
CHECK (amount_due >= '0'::numeric(8,2));

ALTER TABLE cc_payment
ADD CONSTRAINT amount_paid_non_neg
CHECK (amount_paid >= '0'::numeric(8,2));

ALTER TABLE cc_interest
ADD CONSTRAINT amount_non_neg
CHECK (amount >= '0'::numeric(8,2));

ALTER TABLE cc_transaction
ADD CONSTRAINT amount_non_neg
CHECK (amount >= '0'::numeric(8,2));

