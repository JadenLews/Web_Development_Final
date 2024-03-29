CREATE VIEW cc_balance_view AS
SELECT cc_creditcard.number,
COALESCE(transactions + interest - payments, 0.0) AS balance
FROM cc_creditcard LEFT JOIN
(
SELECT card_number, SUM(amount) AS transactions
FROM cc_transaction
GROUP BY card_number
) AS transactions ON cc_creditcard.number = transactions.card_number
LEFT JOIN
(
SELECT card_number, SUM(amount) AS interest
FROM cc_interest
GROUP BY card_number
) AS interest ON cc_creditcard.number = interest.card_number
LEFT JOIN
(
SELECT card_number, SUM(amount_paid) AS payments
FROM cc_payment
GROUP BY card_number
) AS payments ON cc_creditcard.number = payments.card_number;