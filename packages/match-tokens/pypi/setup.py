import json
from setuptools import setup, find_packages

with open('README.md', 'r') as fh:
    long_description = fh.read()

with open('package.json', 'r') as fh:
    package = json.loads(fh.read())

setup(
    name='match-tokens',
    version=package['version'],
    author='Twilio Inc.',
    author_email='match@twilio.com',
    description='Match design system tokens',
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://match.twilio.design',
    packages=find_packages(exclude=['templates']),
    classifiers=[
        'License :: Other/Proprietary License',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 3',
    ],
)

